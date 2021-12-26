install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: 
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8