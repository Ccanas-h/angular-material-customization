### Customización de Angular Material 

- Proyecto con Angular 17 y scss.
- Angular Material Version 17.3.6
- https://material.angular.io/guide/getting-started
- Habilitar el modulo de animacion en el appConfig.ts. Como el proyecto fue creado Standalone, no tiene ngModules sino un appConfig.ts y desde aqui es solo agregar lo siguiente. 
	* Step 1: Enabling the animations module
Import provideAnimations from @angular/platform-browser/animations and add it to the providers list in the bootstrapApplication function call.
	* Solo se debe agregar el  provideAnimations() 
- Luego se debe importar el style.scss en Angular json dentro de ambos arrays de "styles []"
- Aplicar esto en style.scss https://material.angular.io/guide/theming 
	*  Explicaciones en comentarios de style.scss
- Para la customizacion de colores se puede agregar nuevos "$custom-palettes:" y obtener la paleta completa de colores en el siguiente link. 
	*  https://m1.material.io/style/color.html#color-color-palette