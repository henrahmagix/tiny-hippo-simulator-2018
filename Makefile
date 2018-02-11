.PHONY: all
all: build

YARN_INSTALL := node_modules
$(YARN_INSTALL):
	yarn

webpack:
	$$(npm bin)/webpack

.PHONY: build
build: $(YARN_INSTALL)
build: webpack

.PHONY: serve
serve:
	$$(npm bin)/webpack-dev-server --host 0.0.0.0

GH_PAGES := .gh-pages
$(GH_PAGES):
	git clone -b gh-pages git@github.com:henrahmagix/tiny-hippo-simulator-2018.git .gh-pages

.PHONY: deploy
deploy: $(GH_PAGES)
deploy:
	NODE_ENV=production $$(npm bin)/webpack --progress --output-path dist
	rsync -avz --delete --exclude=/.git dist/ $(GH_PAGES)
	cd $(GH_PAGES) && git add --all . && git diff-index --quiet HEAD -- && echo "Nothing to deploy" || (git commit -m "Update $$(date "+%Y-%m-%d %H:%M:%S")" && git push)
	rm -r dist
