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
	$$(npm bin)/webpack-dev-server

GH_PAGES := .gh-pages
$(GH_PAGES):
	git clone -b gh-pages git@github.com:henrahmagix/tiny-hippo-simulator-2018.git .gh-pages

.PHONY: deploy
deploy: $(GH_PAGES)
deploy:
	rsync -avz --delete --exclude=/.git public/ $(GH_PAGES)
	cd $(GH_PAGES) && git add --all . && git commit -m "Update $$(date "+%Y-%m-%d %H:%M:%S")" && git push
