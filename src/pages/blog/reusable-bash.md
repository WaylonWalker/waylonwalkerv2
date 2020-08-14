---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['bash', 'linux']
twitter_announcement: I just dropped a new post check it out.
path: reusable-bash
title: Creating Reusable Bash Scripts
date: 2020-08-13T05:00:00Z
status: published
description:
related_post_body: ''
related_post: []
cover: '/static/reusable-bash.png'
twitter_cover: '/static/reusable-bash.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

Bash is a language that is quite useful for automation no matter what language you write in.  Bash can do so many powerful system level tasks.  Even if you are on windows these days you are likely to come accross bash inside a cloud VM, Continuous Integration, or even inside of docker.

I have three techniques that help me write more composable bash scripts.

* Functions
* Error Handling
* `if __name__ == "__main__"`

## functions

Functions in bash are quite simple.  They are something that I wish I would have started using long ago.  They make your code much more reusable.  I often use them in my aliases as well since they can simplify the process and allow more flexibility.

**syntax**
``` bash
#!/bin/bash
# hello_world.sh
hello_world () {
    echo "hello world"
}
```

Source the file to load the function and run it from the terminal.

**run it**
``` bash
source hello_world.sh
hello_world
```

**output**

``` bash
hello world
```

## Arguments

Arguments and options are quite a bit more complex in bash.  For now we will focus on the basics which are not all that bad.

### positional arguments

Positional arguments can be pulled out quite easily using `$1` for the first one, `$2` for the second and so on.

**note** `$0` is the command that was called.  You will see this often used to find the command called to open up your current shell.

**syntax**
``` bash
#!/bin/bash
# hello.sh
hello () {
    echo "hello $1"
}
```

**run it**
``` bash
source hello.sh
hello waylon
```

Now we have a function that accepts positional arguments and we can call it by passing things into it.

**outputs**
``` bash
hello waylon
```

More than one argument would be ignoreed since we are only looking at `$1`.

**run it**
``` bash
source hello.sh
hello waylon walker
```

**outputs**
``` bash
hello waylon
```

### All Arguments

Bash has another special variable `$@` that stores **all arguments** in one.

**syntax**
``` bash
#!/bin/bash
# hello.sh
hello () {
    echo "hello $@"
}
```

Just the same as before.

**run it**
``` bash
source hello.sh
hello waylon walker
```

Now the function will output all arguments that are passed into it, since we are using the `$@` variable.

**outputs**
``` bash
hello waylon walker
```

## Error Handling

The easiest and most common way to handle an error in bash is through the use of the logical operators `&&` (and) and `||` (or).


Here I have a concrete example from earlier today.  I was creating a bash script to run a python script from cron.  The bash script is there to make sure that we have the python environment, activate it, and run.  If it doesn't have it, it should create it.


``` bash
create_env() {
    conda create -n $1 python=3.8
    conda activate $1
    pip install -r requirements.txt
}

env_exists() {
conda info --envs | awk '{print $1}' | tail -n +3 | grep -w $1 > /dev/null
}

create_if () {
env_exists $1  && echo "environment exists" || create_env $1
}

create_if my_env
```

If we look at the `create_if` function, it will check if the environment exists if there is a passing status code `0`, then it will run `echo "environment exists"` otherwise it will run `create_env $1`.

**note** Inside of `env_exists` grep will look for whole words if there is a match it will give a status code 0 if it finds a match and not 0 if there is no match.


## main script
_`if __name__ == "__main__"`_

The last thing I want to discuss is making a bash script both runnable and sourcable.  This makes it so that you can `source filename.sh` and run each function individually, or `bash filename.sh` to run the script.  This is a similar concept to `if __name__ == "__main__"` from python.

I did try this from bash and zsh with success.  The following is an example that would pass all arguments into a main function.

**syntax**
``` bash
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
```

Extending the example above that created a python example if necessary we can create the env if necessary, activate the environment, and run the script.

**syntax**
``` bash
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
create_if my_env
conda activate my_env
python script.py
fi
```

Using this syntax to run our "main" functions will allow us to both run the script or source the script to utilize the functions that we created.