import { Commentaire } from "./commentaire";
export interface PlatTunisien {
id:string;
 nom:string ; 
 region : string ;
 photo : string ;
 categorie: string ;
 description: string ;
 ingredients: string[];
 dateDecouverte : Date ;
 favori : boolean ;
 dureeprepa : number ;
 nombreLikes : number ;
 comments:Commentaire[] ;

}
