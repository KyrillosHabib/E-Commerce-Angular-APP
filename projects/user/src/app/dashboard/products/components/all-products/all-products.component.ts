import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{

  products:Product[] = []
  categories:string[] = []
  loading:boolean = false;
  cartProducts:any[] = []
  constructor(private service:ProductsService){

  }
  ngOnInit(): void {
      this.getProducts()
      this.getCategories()
  }

getProducts(){
  this.loading = true
  this.service.getAllProducts().subscribe((res:any)=>{
    this.products = res
    this.loading = false
   // console.log(this.products)
  } , error=>{
    this.loading = false
    alert("Error")
    console.log(error.message)
  })
}


getCategories(){
  this.loading = true
  this.service.getAllCategories().subscribe((res:any)=>{
    this.categories = res
    this.loading = false
    //console.log(this.categories)
  }, error=>{
    this.loading = false
    alert("Error")
    console.log(error.message)
  })
}

filterCategory(event:any){
  let value= event.target.value;
  //console.log(value)
  if (value == "All"){
    this.getProducts()
  }else{
  this.getProductsCategory(value)
}
}
getProductsCategory(keyword:string){
  this.loading = true
  this.service.getProductByCategory(keyword).subscribe((res:any)=>{
    this.loading = false
    this.products = res
  })
}
addToCart(event:any){
  //console.log(event)

  if("cart" in localStorage){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find(item => item.item.id == event.item.id)
    if(exist){
      alert("Found")
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

  }else{
    this.cartProducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
}

}
