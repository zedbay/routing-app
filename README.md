# Angular routing

## Introduction

- Les bases du routing sur angular
- LazyLoading
- Overview des guards fournis par Angular
- Initié un state d'un composant avec de la data via le routing

## Angular les bases du routing

## Routes définitions

- L'ordre des routes déinfi est important, chacunes des routes est évaluer dans l'ordre et la première qui match est celle utilié.
- Path '**', component page not-found
- pathMatch
- redirectTo
- children with nested routes, and name router-outlet
- title (to set custom title by page), can be a resolver or literal string (good practice to set unique title for each screen (easier fon an suer to identify screen in history))


## Lazy loading

- Le lzay loading consiste au chargement différé de certaines partie de l'application au fur et a mesure de l'utilisation de celle ci
- a pour but de réduire le temps de chargement de l'application, meilleur éxpérience utilisateur pour les grosses application

## Resolver

- Resolver, can perform some actions before loading screen, can also be resued for another screen. Par exemple récupérer 
 les détails d'un produit via un appel http (avec le bindToComponentInputs, les valeurs sont directement en @Input)
  - cele permet de réutiliser des logiques de fetchs
  - permet la transmission de data dans la hiérarchie des compksa ts a gilar mlus simplement
  - Permet d'isoler la gestion d'eereur en cas d'erreur http, evite l'effet clignotement d'une page qui se load puis part en erreur
    meilleur endroit pour gérer les erreurs httos
  - Il est aussi possible en combinaison des Resolver d'afficher automatiquement un loadingScreen

## Pass data into components via routing

Without injecting the activatedRoute service, you can easylu bind router data to your  comonent inputs using dynamic impors of router data feature. As a result code can become easier and cleaner.
- :id
- 'data': for example to set state to component
- 
## Configuration du router

- La configuration du router est un objet passé dans RouterModule.forRoot();
- bindtocomponetInputs un router.forRoot config to get directly in component as Input some uri params like id (depuis angukar 1§).
- {paramsInheritanceStrategy: 'always'}: permet la translission es inpouts de component de composant parent a composant enfants
- enableTracing: chaque event du router est logé dans la console; pour le debug

## Guard

### Guar candeactivate
  
- Guard candeactivate, function with comoonent instance as input and return boolean,
  if return true user can perpfom navigation action, if not user can't

### Guard canLoad

  
-guard canActivate return url true or boolean, if all guards return true navigation continue, if one guard return false navigation is cancelles, if one guard
return urlTree a new navigation is strated. Main go is to prevent unauthorized user from accessing somes routes.
Gurad can load similar with canActivate but user to prevent application to load lazyloading module if the is not authorized
- Guard can match determine if a guard can be matched
- Canload canactivate canmatch do smilar job but there is semantic information behind. They also accept arrow function
- Guard canActivateChild will always be executed while navigating to/between child routes.
- Guard canActivate trigger when composant is loaded
