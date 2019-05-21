import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
   new Recipe('A Test Recipe','This is simply a test','https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjCgIG10KPiAhUOsJ4KHeutB48QjRx6BAgBEAU&url=https%3A%2F%2Fwww.tasteofhome.com%2Frecipes%2Fhealthier-than-egg-rolls%2F&psig=AOvVaw2OEXhoUkt_g5w7b1JR-wFC&ust=1558219039647677')
 ];
  constructor() { }

  ngOnInit() {
  }

}
