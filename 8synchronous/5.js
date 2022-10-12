function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        resolve(data);
      } else {
        reject(Error("Error mengambil data produk"));
      }
    };
    ajax.open("GET", getProductsUrl(keyword));
    ajax.send();
  });
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProducts(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

async function buttonClick() {
  // Code Async Await Here!

  // BEFORE
  // const promise = getProducts(document.getElementById("keyword").value);
  // promise
  //     .then(function (value) {
  //         return value.data.products;
  //     })
  //     .then(function (products) {
  //         clearProducts();
  //         products.forEach(function (product) {
  //             displayProduct(product);
  //         })
  //     })
  //     .catch(function (error) {
  //         alert(error.message);
  //     })
  //     .finally(function () {
  //         console.log("Selesai memproses Promise");
  //     })

  // AFTER
  try {
    const value = await getProducts(document.getElementById("keyword").value);
    const products = value.data.products;
    clearProducts();
    products.forEach(function (product) {
      displayProduct(product);
    });
  } catch (error) {
    alert(error.message);
  } finally {
    console.log("Selesai memproses Async Await");
  }
}
