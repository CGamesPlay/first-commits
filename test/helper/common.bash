function commonSetup() {
    local HELPER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
    local DIR="$(basename "$( dirname "$BATS_TEST_FILENAME" )" )"
    load "$HELPER_DIR/bats-support/load.bash"
    load "$HELPER_DIR/bats-assert/load.bash"
    cd "$HELPER_DIR/../../packages/$DIR"
}

function checkGit() {
    if [ ! -z "$(git status --porcelain . | grep -v '^. ')" ]; then
        if [ $BATS_TEST_NUMBER = 1 ]; then
            pwd >&3
            echo "There are uncommited changes in the target directory. Bailing." >&3
            git status . >&3
        fi
        skip
    fi
}

commonSetup
checkGit

# vim: ft=bash
