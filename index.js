
function choose_product (name) {
    if (name == "document.getElementById('sec1-name')"){
        this.total= document.createElement('div');
        this.image = document.getElementById('sec1-img');
        image.src=`data:image/jpg;base64,${product_image}`;
        this.discount = document.getElementById('sec1-dis');
        this.price = document.getElementById('sec1-price');
        this.short_desc = document.getElementById('sec1-description');
        this.tag = 'cafe chair';
        this.unit_price = this.image*(100+this.discount);

        this.total.appendChild(this.image);
        this.total.appendChild(name);
        this.total.appendChild(this.discount);
        this.total.appendChild(this.price);
        this.total.appendChild(this.short_desc);
        this.total.appendChild(this.tag);
        this.total.appendChild(this.unit_price);


        return this.total;
    }

    else if (name == document.getElementById('sec3-name')){
        this.total= document.createElement('div');
        this.image = document.getElementById('sec3-img');
        image.src=`data:image/jpg;base64,${product_image}`;
        this.discount = document.getElementById('sec3-dis');
        this.price = document.getElementById('sec3-price');
        this.short_desc = document.getElementById('sec3-description');
        this.tag = 'sofa';
        this.unit_price = this.image*(100+this.discount);

        this.total.appendChild(this.image);
        this.total.appendChild(name);
        this.total.appendChild(this.discount);
        this.total.appendChild(this.price);
        this.total.appendChild(this.short_desc);
        this.total.appendChild(this.tag);
        this.total.appendChild(this.unit_price);

        return this.total;
    }
}

    


