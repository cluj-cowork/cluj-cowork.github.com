Cluj Coworking Space Homepage
=============================

Patches welcome!

### Requirements

All the stuff can be found in Gemfile. Make sure you run `bundle`.

* Jekyll
* Compass
* Zurb Foundation

### Usage 

$ jekyll build
# => The current folder will be generated into ./_site

$ jekyll build --destination <destination>
# => The current folder will be generated into <destination>

$ jekyll build --source <source> --destination <destination>
# => The <source> folder will be generated into <destination>

$ jekyll build --watch
# => The current folder will be generated into ./_site,
#    watched for changes, and regenerated automatically.

$ jekyll serve
# => A development server will run at http://localhost:4000/
# Auto-regeneration: enabled. Use `--no-watch` to disable.