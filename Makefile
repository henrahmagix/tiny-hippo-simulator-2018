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
