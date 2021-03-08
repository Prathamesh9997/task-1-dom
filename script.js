async function showGallery() {
  let container = document.querySelector(".container");
  let gallery = document.querySelector(".gallery");
  let query = document.querySelector(".query").value;
  document.querySelector(".query").value = "";
  let api_key = "20583871-24538aa0638807f136238470d";
  let url = `https://pixabay.com/api/?key=${api_key}&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  const images = data.hits;
  let new_gallery = document.createElement("div");
  new_gallery.setAttribute("class", "gallery text-center");
  images.map((image) => {
    let img = document.createElement("img");
    img.setAttribute("src", image.webformatURL);
    new_gallery.append(img);
  });
  container.replaceChild(new_gallery, gallery);
  new_gallery.style.overflow = "scroll";
  new_gallery.style.height = "500px";
  new_gallery.style.overflowX = "hidden";
}
