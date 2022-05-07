#!/usr/bin/env bats

function setup() {
    local DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    load "$DIR/../helper/common.bash"
}

@test "basic compilation" {
    yarn install
    yarn lint
    yarn test
    yarn build
}

@test "command runner" {
    run yarn cli greet
    [ "$status" -eq 0 ]
    assert_output --partial 'Hello, world!'
}

@test "type check application files" {
    cp app/routes/index.tsx app/routes/.index.tsx~
    cat <<'EOF' >>app/routes/index.tsx

function hasError() {
  const foo: number = "seven";
}
EOF
    run yarn lint
    mv app/routes/.index.tsx~ app/routes/index.tsx
    [ "$status" -eq 1 ]
}

@test "type check test files" {
    cat <<'EOF' > app/routes/typescript.test.tsx
export {}

it("checks TypeScript errors", () => {
  const foo: number = "seven";
});
EOF
    run yarn jest app/routes/typescript.test.tsx
    rm app/routes/typescript.test.tsx
    [ "$status" -eq 1 ]
    assert_output --partial 'TS2322'
}

@test "eslint" {
    cp app/routes/index.tsx app/routes/.index.tsx~
    cat <<'EOF' >>app/routes/index.tsx

function hasLint() {
  var foo = 7;
}
EOF
    run yarn lint
    mv app/routes/.index.tsx~ app/routes/index.tsx
    [ "$status" -eq 1 ]
    assert_output --partial '@typescript-eslint/no-unused-vars'
}

# vim: ft=bash
