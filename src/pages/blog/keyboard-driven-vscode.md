---
templateKey: blog-post
path: keyboard-driven-vscode
title: Keyboard Driven VSCode
date: 2019-07-07T05:00:00Z
status: published
description: Reimagining my tmux configuration inside of vscode.
cover: "/images/alt b.png"
twitter_cover: "/images/alt b.jpg"

---
## Alt+\[hjkl\]

This is by var the most useful set of keybindings that I use in vscode and is directly replicated from my tmux configuration.  It allows me to quickly jump up, down, left, right.  Do note that if you use vertical splits it does not work as well as tmux 😢.

![navigating vscode with keyboard shortcuts](/images/alt \[hjkl\].gif "Alt+[hjkl]")

        {
            "key": "alt+j",
            "command": "workbench.action.terminal.focus",
            "when": "editorFocus"
        },
    
        {
            "key": "alt+k",
            "command": "workbench.action.focusFirstEditorGroup",
            "when": "terminalFocus"
        },
        {
            "key": "alt+k",
            "command": "workbench.action.focusAboveGroup",
            "when": "editorFocus"
        },
        {
            "key": "alt+l",
            "command": "-toggleFindInSelection",
            "when": "editorFocus"
        },
        {
            "key": "alt+l",
            "command": "workbench.action.focusNextGroup",
            "when": "editorFocus"
        },
        {
            "key": "alt+h",
            "command": "workbench.action.focusPreviousGroup",
            "when": "editorFocus"
        },
    
        {
            "key": "alt+l",
            "command": "workbench.action.terminal.focusNextPane",
            "when": "terminalFocus"
        },
        {
            "key": "alt+h",
            "command": "workbench.action.terminal.focusPreviousPane",
            "when": "terminalFocus"
        },

## Alt+b

Since closing the sidebar is assigned to `ctrl+b` I thought that it made most sense to simulate the activity bar with `alt+b`.  There are many times when I just want to get as much out of the way as possible and this little bit does help.

![hiding the activity bar ](/images/alt b.gif "Alt+b")

    [
        {
            "key": "alt+b",
            "command": "workbench.action.toggleActivityBarVisibility",
            "when": "editorFocus"
        },
    ]

## Alt+\[sv\]

This is another one replicated from tmux for quickly creatiting horizontal (s) and vertical (v) splits.

        {
            "key": "alt+s",
            "command": "workbench.action.terminal.split",
            "when": "terminalFocus"
        },
        {
            "key": "alt+s",
            "command": "workbench.action.splitEditor",
            "when": "editorFocus"
        },
        {
            "key": "alt+v",
            "command": "workbench.action.splitEditorOrthogonal",
            "when": "editorFocus"
        },
    