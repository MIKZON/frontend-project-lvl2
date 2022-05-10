install:
				npm ci

test-coverage:
				npm test -- --coverage --coverageProvider=v8

lint:
				npx eslint .

publish:
				npm publish --dry-run

go:

				node index.js


test:
				npx jest .
