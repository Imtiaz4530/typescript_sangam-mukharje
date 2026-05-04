<!-- Typescript Instalation  -->

npm i -D typescript

<!-- creating tsconfig file -->

npx tsc --init

<!-- Minimum tsconfig -->

{
"compilerOptions": {
"target": "es2022",
"module": "es2022",
"moduleResolution": "bundler",
"strict": true,
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true,
"useUnknownInCatchVariables": true,
"skipLibCheck": true,
"rootDir": "src",
"outDir": "dist"
},
"include": ["src"]
}

<!-- Build and watch command -->

"build": "tsc -p tsconfig.json",
"dev": "tsc -w -p tsconfig.json",
