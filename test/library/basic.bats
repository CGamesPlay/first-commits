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

@test "run the program" {
    run node dist/index.js
    [ "$status" -eq 0 ]
    assert_output --partial 'Hello, TypeScript!'
}

@test "type check files" {
    cat <<'EOF' >>src/error.ts

function hasError() {
  const foo: number = "seven";
}
EOF
    run yarn build
    rm src/error.ts
    [ "$status" -eq 1 ]
}

@test "type check test files" {
    cat <<'EOF' > src/error.test.ts
it("checks TypeScript errors", () => {
  const foo: number = "seven";
});
EOF
    run yarn jest src/error.test.ts
    rm src/error.test.ts
    [ "$status" -eq 1 ]
}

@test "eslint" {
    cat <<'EOF' >>src/error.ts

function hasLint() {
  var foo = 7;
}
EOF
    run yarn lint
    rm src/error.ts
    [ "$status" -eq 1 ]
    assert_output --partial '@typescript-eslint/no-unused-vars'
}

# vim: ft=bash
