var mobiles = 
{
  "KeyPad": 
      {
          "Nokia": {
              "8110": "1400",
              "Guru": "1200",
              "105": "800",
              "3310": "1000"
          },
          "Samsung": {
              "BasicModel1": "1000",
              "BasicModel2": "1100",
              "E1200": "900",
              "Guru1200": "950"
          },
          "Motorola": {
              "Razr": "2000",
              "KRZR": "1800",
              "StarTAC": "1500"
          }
        },
  "SmartPhone":
  {
          "Poco": {
              "X2": "18500",
              "F3": "25000",
              "M3": "15000"
          },
          "Samsung": {
              "Galaxy S21": "80000",
              "Galaxy Note 20": "70000",
              "Galaxy A52": "45000"
          },
          "Apple": {
              "iPhone 13": "100000",
              "iPhone SE": "45000",
              "iPhone 12": "90000"
          },
          "OnePlus": {
              "9 Pro": "60000",
              "Nord": "35000",
              "8T": "48000"
          },
          "Xiaomi": {
              "Mi 11": "55000",
              "Redmi Note 10": "20000",
              "POCO X3": "22000"
          },
          "Sony": {
              "Xperia 1 III": "90000",
              "Xperia 5 III": "75000",
              "Xperia 10 III": "50000"
          },
          "Google": {
              "Pixel 6 Pro": "85000",
              "Pixel 5a": "40000",
              "Pixel 4a": "35000"
          }
      }
    
};
function display_mobile_brands()
{
    
    var r=document.getElementById("mobile_type").value;
    var mobile_brand = document.getElementById("mobile_brand");
    mobile_brand.innerHTML = "";
    var p=document.createElement("option");
    p.innerHTML="Select Mobile Brand";
    mobile_brand.appendChild(p);
    for(var s in mobiles[r])
    {
        //console.log(mobiles[r]);
        var p=document.createElement("option");
        p.innerHTML=s;
        mobile_brand.appendChild(p);
    }
}
function display_mobile_models()
{
    var r = document.getElementById("mobile_type").value;
    var t = document.getElementById("mobile_brand").value;
    var mobile_model = document.getElementById("mobile_model");
    mobile_model.innerHTML="";
    var p = document.createElement("option");
    p.innerHTML = "Select Mobile Model";
    mobile_model.appendChild(p);
    for(var s in mobiles[r][t])
    {
        var p = document.createElement("option");
        p.innerHTML = s;
        mobile_model.appendChild(p);
    }
}
function display_mobile_model_price()
{
    var r = document.getElementById("mobile_type").value;
    var t = document.getElementById("mobile_brand").value;
    var s = document.getElementById("mobile_model").value;
    document.getElementById("mobile_price").innerHTML = "Price of the selected mobile is "+mobiles[r][t][s]+" rupees";
}