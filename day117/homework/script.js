// task 1:

// let phone1 = {
//     brand: "Xiaomi",
//     device: "Redmi Note 12 4G",
//     codename: "topaz",
//     androidVersion: "Android 15",
//     OS: "HyperOS 2.0.9.0",
//     chipset: "Snapdragon 685",
//     RAM: "4GB",
//     storage: "128GB",
//     battery: "5000mAh",
//     kernel: "Linux 4.14",
//     bootloaderUnlocked: false
// };

// let phone2 = {
//     brand: "Samsung",
//     device: "Galaxy S21+",
//     codename: "p3s",
//     androidVersion: "Android 15",
//     OS: "One UI 7",
//     chipset: "Exynos 2100",
//     RAM: "8GB",
//     storage: "128GB",
//     battery: "4800mAh",
//     kernel: "Linux 5.10",
//     bootloaderUnlocked: false
// };

// let phone3 = {
//     brand: "Apple",
//     device: "iPhone 12 Mini",
//     codename: "d52g",
//     iosVersion: "iOS 17",
//     chipset: "A14 Bionic",
//     RAM: "4GB",
//     storage: "64GB",
//     battery: "2227mAh",
//     kernel: "XNU",
//     bootloaderUnlocked: false
// };

// let phone4 = {
//     brand: "Xiaomi",
//     device: "Redmi Turbo 3",
//     codename: "turbo3",
//     androidVersion: "Android 13",
//     OS: "MIUI 14",
//     chipset: "MediaTek Dimensity 9200+",
//     RAM: "12GB",
//     storage: "256GB",
//     battery: "5000mAh",
//     kernel: "Linux 6.1",
//     bootloaderUnlocked: false
// };

// task 2:

class Phone {
    constructor({brand, device, codename, androidVersion, OS, chipset, RAM, storage, battery, kernel, bootloaderUnlocked}) {
        this.brand = brand;
        this.device = device;
        this.codename = codename;
        this.androidVersion = androidVersion;
        this.OS = OS;
        this.chipset = chipset;
        this.RAM = RAM;
        this.storage = storage;
        this.battery = battery;
        this.kernel = kernel;
        this.bootloaderUnlocked = bootloaderUnlocked;
    }
}

let phone1 = new Phone({
    brand: "Xiaomi",
    device: "Redmi Note 12 4G",
    codename: "topaz",
    androidVersion: "Android 15",
    OS: "HyperOS 2.0.9.0",
    chipset: "Snapdragon 685",
    RAM: "4GB",
    storage: "128GB",
    battery: "5000mAh",
    kernel: "Linux 4.14",
    bootloaderUnlocked: false
});

let phone2 = new Phone({
    brand: "Samsung",
    device: "Galaxy S21+",
    codename: "p3s",
    androidVersion: "Android 15",
    OS: "One UI 7",
    chipset: "Exynos 2100",
    RAM: "8GB",
    storage: "128GB",
    battery: "4800mAh",
    kernel: "Linux 5.10",
    bootloaderUnlocked: false
});

let phone3 = new Phone({
    brand: "Apple",
    device: "iPhone 12 Mini",
    codename: "d52g",
    androidVersion: "iOS 17",
    OS: "iOS",
    chipset: "A14 Bionic",
    RAM: "4GB",
    storage: "64GB",
    battery: "2227mAh",
    kernel: "XNU",
    bootloaderUnlocked: false
});

let phone4 = new Phone({
    brand: "Xiaomi",
    device: "Redmi Turbo 3",
    codename: "turbo3",
    androidVersion: "Android 13",
    OS: "MIUI 14",
    chipset: "MediaTek Dimensity 9200+",
    RAM: "12GB",
    storage: "256GB",
    battery: "5000mAh",
    kernel: "Linux 6.1",
    bootloaderUnlocked: false
});