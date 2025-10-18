# Git - Complete Guide

## Table of Contents
1. [Introduction to Git](#introduction-to-git)
2. [Git Basics](#git-basics)
3. [Branching and Merging](#branching-and-merging)
4. [Remote Repositories](#remote-repositories)
5. [Advanced Git](#advanced-git)
6. [Git Workflows](#git-workflows)
7. [Best Practices](#best-practices)

---

## Introduction to Git

Git is a distributed version control system for tracking changes in source code during software development.

### Why Git?
- **Distributed** - Every developer has full history
- **Fast** - Most operations are local
- **Branching** - Lightweight and easy
- **Data Integrity** - Checksummed storage
- **Free and Open Source** - MIT license

### Git vs Other VCS
- SVN (Centralized) - Git (Distributed)
- Slower operations - Faster operations
- Network dependent - Works offline
- Limited branching - Easy branching

---

## Git Basics

### Installation

```bash
# Check installation
git --version

# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check config
git config --list
git config user.name
```

### Initialize Repository

```bash
# Create new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder
```

### Basic Workflow

```
Working Directory → Staging Area → Repository
     (add)              (commit)
```

```bash
# Check status
git status

# Add files to staging
git add file.txt
git add .                    # All files
git add *.js                 # All JS files
git add src/                 # Entire directory

# Commit changes
git commit -m "Commit message"
git commit -am "Add and commit"  # Add modified files and commit

# View commit history
git log
git log --oneline
git log --graph --oneline --all
git log --author="John"
git log --since="2 weeks ago"
git log --grep="bug fix"
```

### Viewing Changes

```bash
# Show unstaged changes
git diff

# Show staged changes
git diff --staged

# Show changes for specific file
git diff file.txt

# Show changes between branches
git diff branch1..branch2

# Show changes between commits
git diff commit1 commit2
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- file.txt
git restore file.txt         # Git 2.23+

# Unstage file
git reset HEAD file.txt
git restore --staged file.txt  # Git 2.23+

# Amend last commit
git commit --amend -m "New message"

# Revert commit (creates new commit)
git revert <commit-hash>

# Reset to previous commit
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged (default)
git reset --hard HEAD~1   # Discard changes
```

---

## Branching and Merging

### Branch Basics

```bash
# List branches
git branch                  # Local branches
git branch -r               # Remote branches
git branch -a               # All branches

# Create branch
git branch feature-login

# Switch branch
git checkout feature-login
git switch feature-login    # Git 2.23+

# Create and switch
git checkout -b feature-signup
git switch -c feature-signup

# Delete branch
git branch -d feature-login  # Safe delete
git branch -D feature-login  # Force delete

# Rename branch
git branch -m old-name new-name
```

### Merging

```bash
# Merge branch into current branch
git merge feature-login

# Fast-forward merge (if possible)
git merge --ff-only feature-login

# No fast-forward (always create merge commit)
git merge --no-ff feature-login

# Squash merge (combine all commits)
git merge --squash feature-login
```

### Merge Conflicts

```bash
# When conflict occurs
git status  # Shows conflicted files

# Edit conflicted files
# Look for conflict markers:
<<<<<<< HEAD
Current branch code
=======
Incoming branch code
>>>>>>> feature-branch

# After resolving
git add resolved-file.txt
git commit -m "Resolve merge conflict"

# Abort merge
git merge --abort
```

### Rebasing

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Interactive rebase options:
# pick - use commit
# reword - change commit message
# edit - stop for amending
# squash - combine with previous
# fixup - like squash, discard message
# drop - remove commit

# Continue after conflict
git rebase --continue

# Abort rebase
git rebase --abort
```

---

## Remote Repositories

### Remote Basics

```bash
# List remotes
git remote
git remote -v

# Add remote
git remote add origin https://github.com/user/repo.git

# Change remote URL
git remote set-url origin https://github.com/user/new-repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin upstream
```

### Push and Pull

```bash
# Push to remote
git push origin main
git push origin feature-branch
git push -u origin main  # Set upstream

# Push all branches
git push --all origin

# Push tags
git push --tags

# Force push (careful!)
git push --force origin main
git push --force-with-lease origin main  # Safer

# Pull from remote
git pull origin main     # Fetch + merge
git pull --rebase origin main  # Fetch + rebase

# Fetch without merging
git fetch origin
git fetch --all
```

### Tracking Branches

```bash
# Create tracking branch
git checkout -b feature origin/feature
git checkout --track origin/feature

# Set upstream for existing branch
git branch --set-upstream-to=origin/main main

# View tracking branches
git branch -vv
```

---

## Advanced Git

### Stashing

```bash
# Stash changes
git stash
git stash save "Work in progress"

# List stashes
git stash list

# Apply stash
git stash apply           # Keep stash
git stash pop             # Apply and remove

# Apply specific stash
git stash apply stash@{2}

# Stash untracked files
git stash -u

# Stash all files (including ignored)
git stash -a

# Drop stash
git stash drop stash@{0}

# Clear all stashes
git stash clear

# Create branch from stash
git stash branch feature-branch stash@{0}
```

### Cherry-Pick

```bash
# Apply specific commit to current branch
git cherry-pick <commit-hash>

# Cherry-pick multiple commits
git cherry-pick commit1 commit2 commit3

# Cherry-pick without committing
git cherry-pick --no-commit <commit-hash>

# Continue after conflict
git cherry-pick --continue

# Abort cherry-pick
git cherry-pick --abort
```

### Tags

```bash
# List tags
git tag
git tag -l "v1.*"

# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Tag specific commit
git tag v1.0.0 <commit-hash>

# Push tags
git push origin v1.0.0
git push origin --tags

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0

# Checkout tag
git checkout v1.0.0
```

### Reflog

```bash
# View reflog (history of HEAD)
git reflog

# Recover lost commit
git reflog
git checkout <commit-hash>
git branch recovered-branch

# Reflog for specific branch
git reflog show feature-branch
```

### Bisect

```bash
# Start bisect (find bug)
git bisect start
git bisect bad           # Current commit is bad
git bisect good v1.0.0   # Known good commit

# Git will checkout middle commit
# Test and mark as good or bad
git bisect good  # or git bisect bad

# Continue until bug is found

# End bisect
git bisect reset
```

---

## Git Workflows

### Gitflow

```
main
  └── develop
       ├── feature/login
       ├── feature/signup
       └── release/v1.0
            └── hotfix/critical-bug
```

```bash
# Create develop branch
git checkout -b develop main

# Create feature branch
git checkout -b feature/login develop

# Finish feature
git checkout develop
git merge --no-ff feature/login
git branch -d feature/login

# Create release branch
git checkout -b release/v1.0 develop

# Finish release
git checkout main
git merge --no-ff release/v1.0
git tag -a v1.0.0

git checkout develop
git merge --no-ff release/v1.0
git branch -d release/v1.0

# Hotfix
git checkout -b hotfix/critical main
# Fix bug
git checkout main
git merge --no-ff hotfix/critical
git tag -a v1.0.1

git checkout develop
git merge --no-ff hotfix/critical
git branch -d hotfix/critical
```

### Feature Branch Workflow

```bash
# Create feature branch from main
git checkout -b feature/new-feature main

# Make changes and commits
git add .
git commit -m "Add new feature"

# Push to remote
git push -u origin feature/new-feature

# Create Pull Request on GitHub/GitLab
# After review and approval

# Merge to main
git checkout main
git merge --no-ff feature/new-feature
git push origin main

# Delete feature branch
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### Trunk-Based Development

```bash
# Work on main/trunk
git checkout main
git pull origin main

# Create short-lived branch
git checkout -b quick-fix

# Make changes
git add .
git commit -m "Quick fix"

# Merge quickly (same day)
git checkout main
git merge quick-fix
git push origin main
git branch -d quick-fix
```

---

## Best Practices

### Commit Messages

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructure
- test: Tests
- chore: Maintenance

**Examples:**
```bash
git commit -m "feat(auth): add login functionality"
git commit -m "fix(api): resolve null pointer exception"
git commit -m "docs(readme): update installation instructions"
```

### .gitignore

```
# .gitignore

# Dependencies
node_modules/
bower_components/

# Environment
.env
.env.local

# Build outputs
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Test coverage
coverage/
```

### Git Aliases

```bash
# Add to ~/.gitconfig
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    lg = log --graph --oneline --all
    undo = reset --soft HEAD~1
    
# Use alias
git st
git lg
```

### Branching Strategy

1. **main/master** - Production code
2. **develop** - Integration branch
3. **feature/** - New features
4. **release/** - Release preparation
5. **hotfix/** - Critical production fixes

### Commit Guidelines

1. **Commit often** - Small, logical commits
2. **Meaningful messages** - Describe what and why
3. **Test before commit** - Don't break build
4. **One purpose per commit** - Single logical change
5. **Don't commit sensitive data** - Passwords, keys

### Pull Request Best Practices

1. **Keep PRs small** - Easier to review
2. **Write description** - Explain changes
3. **Link issues** - Reference related issues
4. **Request reviewers** - Get feedback
5. **Address feedback** - Make requested changes
6. **Keep updated** - Rebase on target branch

---

## Common Scenarios

### Scenario 1: Accidentally Committed to Wrong Branch

```bash
# If not pushed yet
git reset HEAD~1
git stash
git checkout correct-branch
git stash pop
git add .
git commit -m "Commit message"
```

### Scenario 2: Need to Update Feature Branch

```bash
# Update feature branch with main
git checkout feature-branch
git rebase main
# Or
git merge main
```

### Scenario 3: Made Changes to Wrong File

```bash
# Before commit
git checkout -- wrong-file.txt

# After commit
git revert HEAD
```

### Scenario 4: Want to See Who Changed a Line

```bash
git blame file.txt
git blame -L 10,20 file.txt  # Lines 10-20
```

---

## Useful Commands

```bash
# Show file at specific commit
git show commit-hash:path/to/file

# List files in commit
git show --name-only commit-hash

# Search in commit messages
git log --grep="search term"

# Find when file was deleted
git log --all --full-history -- path/to/file

# Compare branches
git diff main..feature

# Show branch graph
git log --graph --oneline --all

# Clean untracked files
git clean -n  # Dry run
git clean -f  # Force clean
git clean -fd # Clean directories too
```

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with real projects
- Learn GitHub/GitLab workflows
- Explore advanced Git features

