#!/usr/bin/env bats

function setup() {
    local DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    load "$DIR/../helper/common.bash"
}

@test "basic compilation" {
    yarn install
    yarn lint
    yarn test:ci
    yarn build
}

@test "command runner" {
    run yarn cli greet
    [ "$status" -eq 0 ]
    assert_output --partial 'Hello, world!'
}

@test "type check application files" {
    cp pages/index.tsx pages/index.tsx~
    cat <<'EOF' >>pages/index.tsx

function hasError() {
  const foo: number = "seven";
}
EOF
    run yarn build
    mv pages/index.tsx~ pages/index.tsx
    [ "$status" -eq 1 ]
}

@test "type check test files" {
    cat <<'EOF' > __tests__/typescript.tsx
it("checks TypeScript errors", () => {
  const foo: number = "seven";
});
EOF
    run yarn jest __tests__/typescript.tsx
    rm __tests__/typescript.tsx
    [ "$status" -eq 1 ]
}

@test "eslint" {
    cp pages/index.tsx pages/index.tsx~
    cat <<'EOF' >>pages/index.tsx

function hasLint() {
  var foo = 7;
}
EOF
    run yarn lint
    mv pages/index.tsx~ pages/index.tsx
    [ "$status" -eq 1 ]
    assert_output --partial '@typescript-eslint/no-unused-vars'
}

# vim: ft=bash
