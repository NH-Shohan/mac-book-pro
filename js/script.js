// --------------------
// Extra Memory Section
// --------------------
let overAllPrice = document.getElementById("total-sale-price");

function UndateMemory(memoryId, price) {
  const ExtraMemoryCost = document.getElementById("extra-memory-cost");
  const MemoryCost = ExtraMemoryCost.innerText;
  const TotalPrice = document.getElementById("total-price");
  const TotalPriceText = TotalPrice.innerText;
  overAllPrice = document.getElementById("total-sale-price");
  overAllPriceCost = overAllPrice.innerText;

  if (memoryId == "min-memory-button" && MemoryCost > 0) {
    ExtraMemoryCost.innerText = parseInt(MemoryCost) - price;
    TotalPrice.innerText = parseInt(TotalPriceText) - price;
    overAllPrice.innerText = parseInt(overAllPriceCost) - price;
  } else if (memoryId == "max-memory-button" && MemoryCost < 180) {
    ExtraMemoryCost.innerText = parseInt(MemoryCost) + price;
    TotalPrice.innerText = parseInt(TotalPriceText) + price;
    overAllPrice.innerText = parseInt(overAllPriceCost) + price;
  }
}
document
  .getElementById("min-memory-button")
  .addEventListener("click", function () {
    UndateMemory("min-memory-button", 180);
  });
document
  .getElementById("max-memory-button")
  .addEventListener("click", function () {
    UndateMemory("max-memory-button", 180);
  });

// ---------------------
// Extra Storage Section
// ---------------------

function UpdateStorage(storageId, price) {
  const ExtraStorageCost = document.getElementById("extra-storage-cost");
  const StorageCost = ExtraStorageCost.innerText;
  const TotalPrice = document.getElementById("total-price");
  const TotalPriceText = TotalPrice.innerText;
  overAllPrice = document.getElementById("total-sale-price");
  overAllPriceCost = overAllPrice.innerText;

  if (storageId == "min-storage-button" && StorageCost > 0) {
    ExtraStorageCost.innerText = parseInt(StorageCost) * 0;
    if (StorageCost == 100) {
      TotalPrice.innerText = parseInt(TotalPriceText) - 100;
      overAllPrice.innerText = parseInt(overAllPriceCost) - 100;
    } else {
      TotalPrice.innerText = parseInt(TotalPriceText) - 180;
      overAllPrice.innerText = parseInt(overAllPriceCost) - 180;
    }
  } else if (storageId == "mid-storage-button") {
    if (StorageCost == 180) {
      ExtraStorageCost.innerText = parseInt(StorageCost) - 80;
      TotalPrice.innerText = parseInt(TotalPriceText) - 80;
      overAllPrice.innerText = parseInt(overAllPriceCost) - 80;
    } else if (StorageCost < 100) {
      ExtraStorageCost.innerText = parseInt(StorageCost) + price;
      TotalPrice.innerText = parseInt(TotalPriceText) + price;
      overAllPrice.innerText = parseInt(overAllPriceCost) + price;
    }
  } else if (storageId == "max-storage-button" && StorageCost < 180) {
    if (StorageCost == 100) {
      ExtraStorageCost.innerText = parseInt(StorageCost) + 80;
      TotalPrice.innerText = parseInt(TotalPriceText) + 80;
      overAllPrice.innerText = parseInt(overAllPriceCost) + 80;
    } else {
      ExtraStorageCost.innerText = parseInt(StorageCost) + price;
      TotalPrice.innerText = parseInt(TotalPriceText) + price;
      overAllPrice.innerText = parseInt(overAllPriceCost) + price;
    }
  }
}

document
  .getElementById("min-storage-button")
  .addEventListener("click", function () {
    UpdateStorage("min-storage-button", 100);
  });

document
  .getElementById("mid-storage-button")
  .addEventListener("click", function () {
    UpdateStorage("mid-storage-button", 100);
  });

document
  .getElementById("max-storage-button")
  .addEventListener("click", function () {
    UpdateStorage("max-storage-button", 180);
  });

// ---------------------
// Delivery Cost Section
// ---------------------

function UpdateDeliveryCost(deliveryCostId, price) {
  const DeliveryChargeCost = document.getElementById("delivery-charge-cost");
  const DeliveryCost = DeliveryChargeCost.innerText;
  const TotalPrice = document.getElementById("total-price");
  const TotalPriceText = TotalPrice.innerText;
  overAllPrice = document.getElementById("total-sale-price");
  overAllPriceCost = overAllPrice.innerText;

  if (deliveryCostId == "free-delivery-button" && DeliveryCost > 0) {
    DeliveryChargeCost.innerText = parseInt(DeliveryCost) - price;
    TotalPrice.innerText = parseInt(TotalPriceText) - price;
    overAllPrice.innerText = parseInt(overAllPriceCost) - price;
  } else if (deliveryCostId == "charged-delivery-button" && DeliveryCost < 20) {
    DeliveryChargeCost.innerText = parseInt(DeliveryCost) + price;
    TotalPrice.innerText = parseInt(TotalPriceText) + price;
    overAllPrice.innerText = parseInt(overAllPriceCost) + price;
  }
}
document
  .getElementById("free-delivery-button")
  .addEventListener("click", function () {
    UpdateDeliveryCost("free-delivery-button", 20);
  });

document
  .getElementById("charged-delivery-button")
  .addEventListener("click", function () {
    UpdateDeliveryCost("charged-delivery-button", 20);
  });

// ----------
// Promo Code
// ----------

const promoSuc = document.getElementById("promo");
const promoSucBtn = document.getElementById("promoBtn");
promoSucBtn.addEventListener("click", function () {
  if (promoSuc.value == "stevekaku") {
    overAllPrice.innerText = parseInt(overAllPrice.innerText) * 0.8;
  } else {
    alert("Promo Code was wrong!");
  }
});
