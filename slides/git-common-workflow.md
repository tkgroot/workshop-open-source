---
layout: two-cols
---

<template v-slot:default>

# common forking workflow

Following these simple steps to setup your fork correctly!

- fork the project
- clone the forked project from your namespace
- add a reference to the forked project
- add tracking of the default branch
- use branching strategy you prefer

</template>
<template v-slot:right>
<div class="py-28">

```bash
# clone
git clone [your-namespace/project-name]
# reference the original/forked repository
git remote add upstream [project-name]
# update the git refs
git fetch --all
# add a tracking branch to the default branch
git branch -u upstream/[default-branch]
```

</div>
</template>

<!--
Everytime you see yourself confronted with wanting to contribute to a new project you always have to go through the same process. This is not platform specific. There might be slight differences, but in general it always follows the same pattern.

1. First you have to fork the project you want to contribute to. This is mostly done by clicking on the fork button on the platform you use. It will "copy" the repository into your namespace.

After the forking process has finished you can clone the repository.

Now you have cloned the project to your local machine and can further setup the repository to "link" your fork to the original repository, the one you forked from. The link can be created by adding the forked or original repository as a new remote.
Following by fetching the refs from the new remote repository.

Finally you add a tracking branch to your default branch, linking your default with the default of the forked/original repository.
-->
