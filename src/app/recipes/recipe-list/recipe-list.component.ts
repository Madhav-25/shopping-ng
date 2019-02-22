import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Delicioous','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcategory_retina%2Fpublic%2Frecipe-collections%2Fcollection-image%2F2013%2F05%2Fmexican-chicken-burger_1.jpg%3Fitok%3DLJYhlfBT&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcategory%2Fdishes&docid=H-lSPnHKJkIbXM&tbnid=BfPLDx4qDe3cOM%3A&vet=10ahUKEwiH75TczMrgAhVMNd8KHewiBNMQMwhlKAAwAA..i&w=410&h=370&bih=968&biw=919&q=dishes%20images&ved=0ahUKEwiH75TczMrgAhVMNd8KHewiBNMQMwhlKAAwAA&iact=mrc&uact=8')
  ];
  constructor() { }

  ngOnInit() {
  }

}
