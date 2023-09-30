// import java.util.Scanner;

// public class SupermarketDataEntry {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         SupermarketDataEntry app = new SupermarketDataEntry();

//         // Display a menu for the user to select options
//         int choice;
//         do {
//             System.out.println("Supermarket Data Entry");
//             System.out.println("1. Add Product");
//             System.out.println("2. Update Product");
//             System.out.println("3. Delete Product");
//             System.out.println("4. Exit");
//             System.out.print("Enter your choice: ");
//             choice = scanner.nextInt();
//             scanner.nextLine(); // Consume the newline character

//             switch (choice) {
//                 case 1:
//                     app.addProduct(scanner);
//                     break;
//                 case 2:
//                     app.updateProduct(scanner);
//                     break;
//                 case 3:
//                     app.deleteProduct(scanner);
//                     break;
//                 case 4:
//                     System.out.println("Exiting the program...");
//                     break;
//                 default:
//                     System.out.println("Invalid choice. Please try again.");
//             }
//         } while (choice != 4);

//         scanner.close();
//     }

//     private void addProduct(Scanner scanner) {
//         System.out.println("=== Add Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character
//         System.out.print("Enter product name: ");
//         String productName = scanner.nextLine();
//         System.out.print("Enter price: ");
//         double price = scanner.nextDouble();
//         // Add the code to store the product information in the database
//         System.out.println("Product ID: " + productId + ", Name: " + productName + ", Price: " + price + " added successfully!\n");
//     }

//     private void updateProduct(Scanner scanner) {
//         System.out.println("=== Update Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         System.out.print("Enter updated product name: ");
//         String productName = scanner.nextLine();
//         System.out.print("Enter updated price: ");
//         double price = scanner.nextDouble();
//         // Update the product information in the database
//         System.out.println("Product ID: " + productId + ", Name: " + productName + ", Price: " + price + " updated successfully!\n");
//     }

//     private void deleteProduct(Scanner scanner) {
//         System.out.println("=== Delete Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         // Delete the product from the database based on the ID
//         System.out.println("Product with ID: " + productId + " deleted successfully!\n");
//     }
// }






// ======================================= this is the add show all products

// import java.util.ArrayList;
// import java.util.List;
// import java.util.Scanner;

// public class SupermarketDataEntry {
//     private List<Product> products;

//     public SupermarketDataEntry() {
//         products = new ArrayList<>();
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         SupermarketDataEntry app = new SupermarketDataEntry();

//         // Display a menu for the user to select options
//         int choice;
//         do {
//             System.out.println("Supermarket Data Entry");
//             System.out.println("1. Add Product");
//             System.out.println("2. Update Product");
//             System.out.println("3. Delete Product");
//             System.out.println("4. Show All Products");
//             System.out.println("5. Exit");
//             System.out.print("Enter your choice: ");
//             choice = scanner.nextInt();
//             scanner.nextLine(); // Consume the newline character

//             switch (choice) {
//                 case 1:
//                     app.addProduct(scanner);
//                     break;
//                 case 2:
//                     app.updateProduct(scanner);
//                     break;
//                 case 3:
//                     app.deleteProduct(scanner);
//                     break;
//                 case 4:
//                     app.showAllProducts();
//                     break;
//                 case 5:
//                     System.out.println("Exiting the program...");
//                     break;
//                 default:
//                     System.out.println("Invalid choice. Please try again.");
//             }
//         } while (choice != 5);

//         scanner.close();
//     }

//     private void addProduct(Scanner scanner) {
//         System.out.println("=== Add Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character
//         System.out.print("Enter product name: ");
//         String productName = scanner.nextLine();
//         System.out.print("Enter price: ");
//         double price = scanner.nextDouble();
//         Product product = new Product(productId, productName, price);
//         products.add(product);
//         System.out.println("Product added successfully!\n");
//     }

//     private void updateProduct(Scanner scanner) {
//         System.out.println("=== Update Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToUpdate = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToUpdate = product;
//                 break;
//             }
//         }

//         if (productToUpdate != null) {
//             System.out.print("Enter updated product name: ");
//             String productName = scanner.nextLine();
//             System.out.print("Enter updated price: ");
//             double price = scanner.nextDouble();
//             productToUpdate.setProductName(productName);
//             productToUpdate.setPrice(price);
//             System.out.println("Product updated successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void deleteProduct(Scanner scanner) {
//         System.out.println("=== Delete Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToDelete = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToDelete = product;
//                 break;
//             }
//         }

//         if (productToDelete != null) {
//             products.remove(productToDelete);
//             System.out.println("Product deleted successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void showAllProducts() {
//         System.out.println("=== All Products ===");
//         if (products.isEmpty()) {
//             System.out.println("No products found.\n");
//         } else {
//             for (Product product : products) {
//                 System.out.println("Product ID: " + product.getProductId());
//                 System.out.println("Product Name: " + product.getProductName());
//                 System.out.println("Product Price: " + product.getPrice());
//                 System.out.println("---------------------------");
//             }
//             System.out.println();
//         }
//     }

//     private static class Product {
//         private int productId;
//         private String productName;
//         private double price;

//         public Product(int productId, String productName, double price) {
//             this.productId = productId;
//             this.productName = productName;
//             this.price = price;
//         }

//         public int getProductId() {
//             return productId;
//         }

//         public String getProductName() {
//             return productName;
//         }

//         public void setProductName(String productName) {
//             this.productName = productName;
//         }

//         public double getPrice() {
//             return price;
//         }

//         public void setPrice(double price) {
//             this.price = price;
//         }
//     }
// }








// ================ show all product price



// import java.util.ArrayList;
// import java.util.List;
// import java.util.Scanner;

// public class SupermarketDataEntry {
//     private List<Product> products;

//     public SupermarketDataEntry() {
//         products = new ArrayList<>();
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         SupermarketDataEntry app = new SupermarketDataEntry();

//         // Display a menu for the user to select options
//         int choice;
//         do {
//             System.out.println("Supermarket Data Entry");
//             System.out.println("1. Add Product");
//             System.out.println("2. Update Product");
//             System.out.println("3. Delete Product");
//             System.out.println("4. Show All Products");
//             System.out.println("5. Show All Product Prices");
//             System.out.println("6. Exit");
//             System.out.print("Enter your choice: ");
//             choice = scanner.nextInt();
//             scanner.nextLine(); // Consume the newline character

//             switch (choice) {
//                 case 1:
//                     app.addProduct(scanner);
//                     break;
//                 case 2:
//                     app.updateProduct(scanner);
//                     break;
//                 case 3:
//                     app.deleteProduct(scanner);
//                     break;
//                 case 4:
//                     app.showAllProducts();
//                     break;
//                 case 5:
//                     app.showAllProductPrices();
//                     break;
//                 case 6:
//                     System.out.println("Exiting the program...");
//                     break;
//                 default:
//                     System.out.println("Invalid choice. Please try again.");
//             }
//         } while (choice != 6);

//         scanner.close();
//     }

//     private void addProduct(Scanner scanner) {
//         System.out.println("=== Add Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character
//         System.out.print("Enter product name: ");
//         String productName = scanner.nextLine();
//         System.out.print("Enter price: ");
//         double price = scanner.nextDouble();
//         Product product = new Product(productId, productName, price);
//         products.add(product);
//         System.out.println("Product added successfully!\n");
//     }

//     private void updateProduct(Scanner scanner) {
//         System.out.println("=== Update Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToUpdate = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToUpdate = product;
//                 break;
//             }
//         }

//         if (productToUpdate != null) {
//             System.out.print("Enter updated product name: ");
//             String productName = scanner.nextLine();
//             System.out.print("Enter updated price: ");
//             double price = scanner.nextDouble();
//             productToUpdate.setProductName(productName);
//             productToUpdate.setPrice(price);
//             System.out.println("Product updated successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void deleteProduct(Scanner scanner) {
//         System.out.println("=== Delete Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToDelete = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToDelete = product;
//                 break;
//             }
//         }

//         if (productToDelete != null) {
//             products.remove(productToDelete);
//             System.out.println("Product deleted successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void showAllProducts() {
//         System.out.println("=== All Products ===");
//         if (products.isEmpty()) {
//             System.out.println("No products found.\n");
//         } else {
//             for (Product product : products) {
//                 System.out.println("Product ID: " + product.getProductId());
//                 System.out.println("Product Name: " + product.getProductName());
//                 System.out.println("Product Price: " + product.getPrice());
//                 System.out.println("---------------------------");
//             }
//             System.out.println();
//         }
//     }

//     private void showAllProductPrices() {
//         System.out.println("=== All Product Prices ===");
//         if (products.isEmpty()) {
//             System.out.println("No products found.\n");
//         } else {
//             for (Product product : products) {
//                 System.out.println("Product Name: " + product.getProductName());
//                 System.out.println("Product Price: " + product.getPrice());
//                 System.out.println("---------------------------");
//             }
//             System.out.println();
//         }
//     }

//     private static class Product {
//         private int productId;
//         private String productName;
//         private double price;

//         public Product(int productId, String productName, double price) {
//             this.productId = productId;
//             this.productName = productName;
//             this.price = price;
//         }

//         public int getProductId() {
//             return productId;
//         }

//         public String getProductName() {
//             return productName;
//         }

//         public void setProductName(String productName) {
//             this.productName = productName;
//         }

//         public double getPrice() {
//             return price;
//         }

//         public void setPrice(double price) {
//             this.price = price;
//         }
//     }
// }




// ======== calculate price



// import java.util.ArrayList;
// import java.util.List;
// import java.util.Scanner;

// public class SupermarketDataEntry {
//     private List<Product> products;

//     public SupermarketDataEntry() {
//         products = new ArrayList<>();
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         SupermarketDataEntry app = new SupermarketDataEntry();

//         // Display a menu for the user to select options
//         int choice;
//         do {
//             System.out.println("Supermarket Data Entry");
//             System.out.println("1. Add Product");
//             System.out.println("2. Update Product");
//             System.out.println("3. Delete Product");
//             System.out.println("4. Show All Products");
//             System.out.println("5. Show All Product Prices and Calculate Total");
//             System.out.println("6. Exit");
//             System.out.print("Enter your choice: ");
//             choice = scanner.nextInt();
//             scanner.nextLine(); // Consume the newline character

//             switch (choice) {
//                 case 1:
//                     app.addProduct(scanner);
//                     break;
//                 case 2:
//                     app.updateProduct(scanner);
//                     break;
//                 case 3:
//                     app.deleteProduct(scanner);
//                     break;
//                 case 4:
//                     app.showAllProducts();
//                     break;
//                 case 5:
//                     app.showAllProductPricesAndCalculateTotal();
//                     break;
//                 case 6:
//                     System.out.println("Exiting the program...");
//                     break;
//                 default:
//                     System.out.println("Invalid choice. Please try again.");
//             }
//         } while (choice != 6);

//         scanner.close();
//     }

//     private void addProduct(Scanner scanner) {
//         System.out.println("=== Add Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character
//         System.out.print("Enter product name: ");
//         String productName = scanner.nextLine();
//         System.out.print("Enter price: ");
//         double price = scanner.nextDouble();
//         Product product = new Product(productId, productName, price);
//         products.add(product);
//         System.out.println("Product added successfully!\n");
//     }

//     private void updateProduct(Scanner scanner) {
//         System.out.println("=== Update Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToUpdate = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToUpdate = product;
//                 break;
//             }
//         }

//         if (productToUpdate != null) {
//             System.out.print("Enter updated product name: ");
//             String productName = scanner.nextLine();
//             System.out.print("Enter updated price: ");
//             double price = scanner.nextDouble();
//             productToUpdate.setProductName(productName);
//             productToUpdate.setPrice(price);
//             System.out.println("Product updated successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void deleteProduct(Scanner scanner) {
//         System.out.println("=== Delete Product ===");
//         System.out.print("Enter product ID: ");
//         int productId = scanner.nextInt();
//         scanner.nextLine(); // Consume the newline character

//         // Find the product with the given ID
//         Product productToDelete = null;
//         for (Product product : products) {
//             if (product.getProductId() == productId) {
//                 productToDelete = product;
//                 break;
//             }
//         }

//         if (productToDelete != null) {
//             products.remove(productToDelete);
//             System.out.println("Product deleted successfully!\n");
//         } else {
//             System.out.println("Product not found!\n");
//         }
//     }

//     private void showAllProducts() {
//         System.out.println("=== All Products ===");
//         if (products.isEmpty()) {
//             System.out.println("No products found.\n");
//         } else {
//             for (Product product : products) {
//                 System.out.println("Product ID: " + product.getProductId());
//                 System.out.println("Product Name: " + product.getProductName());
//                 System.out.println("Product Price: " + product.getPrice());
//                 System.out.println("---------------------------");
//             }
//             System.out.println();
//         }
//     }

//     private void showAllProductPricesAndCalculateTotal() {
//         System.out.println("=== All Product Prices ===");
//         if (products.isEmpty()) {
//             System.out.println("No products found.\n");
//         } else {
//             double totalPrice = 0.0;
//             for (Product product : products) {
//                 System.out.println("Product Name: " + product.getProductName());
//                 System.out.println("Product Price: " + product.getPrice());
//                 System.out.println("---------------------------");
//                 totalPrice += product.getPrice();
//             }
//             System.out.println("Total Price of all products: " + totalPrice);
//             System.out.println();
//         }
//     }

//     private static class Product {
//         private int productId;
//         private String productName;
//         private double price;

//         public Product(int productId, String productName, double price) {
//             this.productId = productId;
//             this.productName = productName;
//             this.price = price;
//         }

//         public int getProductId() {
//             return productId;
//         }

//         public String getProductName() {
//             return productName;
//         }

//         public void setProductName(String productName) {
//             this.productName = productName;
//         }

//         public double getPrice() {
//             return price;
//         }

//         public void setPrice(double price) {
//             this.price = price;
//         }
//     }
// }






// ======================== create a discount

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SupermarketDataEntry {
    private List<Product> products;

    public SupermarketDataEntry() {
        products = new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        SupermarketDataEntry app = new SupermarketDataEntry();

        // Display a menu for the user to select options
        int choice;
        do {
            System.out.println("Supermarket Data Entry");
            System.out.println("1. Add Product");
            System.out.println("2. Update Product");
            System.out.println("3. Delete Product");
            System.out.println("4. Show All Products");
            System.out.println("5. Show All Product Prices and Calculate Total");
            System.out.println("6. Apply Discount");
            System.out.println("7. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    app.addProduct(scanner);
                    break;
                case 2:
                    app.updateProduct(scanner);
                    break;
                case 3:
                    app.deleteProduct(scanner);
                    break;
                case 4:
                    app.showAllProducts();
                    break;
                case 5:
                    app.showAllProductPricesAndCalculateTotal();
                    break;
                case 6:
                    app.applyDiscount(scanner);
                    break;
                case 7:
                    System.out.println("Exiting the program...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 7);

        scanner.close();
    }

    private void addProduct(Scanner scanner) {
        System.out.println("=== Add Product ===");
        System.out.print("Enter product ID: ");
        int productId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character
        System.out.print("Enter product name: ");
        String productName = scanner.nextLine();
        System.out.print("Enter price: ");
        double price = scanner.nextDouble();
        Product product = new Product(productId, productName, price);
        products.add(product);
        System.out.println("Product added successfully!\n");
    }

    private void updateProduct(Scanner scanner) {
        System.out.println("=== Update Product ===");
        System.out.print("Enter product ID: ");
        int productId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        // Find the product with the given ID
        Product productToUpdate = null;
        for (Product product : products) {
            if (product.getProductId() == productId) {
                productToUpdate = product;
                break;
            }
        }

        if (productToUpdate != null) {
            System.out.print("Enter updated product name: ");
            String productName = scanner.nextLine();
            System.out.print("Enter updated price: ");
            double price = scanner.nextDouble();
            productToUpdate.setProductName(productName);
            productToUpdate.setPrice(price);
            System.out.println("Product updated successfully!\n");
        } else {
            System.out.println("Product not found!\n");
        }
    }

    private void deleteProduct(Scanner scanner) {
        System.out.println("=== Delete Product ===");
        System.out.print("Enter product ID: ");
        int productId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        // Find the product with the given ID
        Product productToDelete = null;
        for (Product product : products) {
            if (product.getProductId() == productId) {
                productToDelete = product;
                break;
            }
        }

        if (productToDelete != null) {
            products.remove(productToDelete);
            System.out.println("Product deleted successfully!\n");
        } else {
            System.out.println("Product not found!\n");
        }
    }

    private void showAllProducts() {
        System.out.println("=== All Products ===");
        if (products.isEmpty()) {
            System.out.println("No products found.\n");
        } else {
            for (Product product : products) {
                System.out.println("Product ID: " + product.getProductId());
                System.out.println("Product Name: " + product.getProductName());
                System.out.println("Product Price: " + product.getPrice());
                System.out.println("---------------------------");
            }
            System.out.println();
        }
    }

    private void showAllProductPricesAndCalculateTotal() {
        System.out.println("=== All Product Prices ===");
        if (products.isEmpty()) {
            System.out.println("No products found.\n");
        } else {
            double totalPrice = 0.0;
            for (Product product : products) {
                System.out.println("Product Name: " + product.getProductName());
                System.out.println("Product Price: " + product.getPrice());
                System.out.println("---------------------------");
                totalPrice += product.getPrice();
            }
            System.out.println("Total Price of all products: " + totalPrice);
            System.out.println();
        }
    }

    private void applyDiscount(Scanner scanner) {
        System.out.println("=== Apply Discount ===");
        System.out.print("Enter discount percentage: ");
        double discountPercentage = scanner.nextDouble();

        if (discountPercentage >= 0 && discountPercentage <= 100) {
            for (Product product : products) {
                double discountedPrice = product.getPrice() * (1 - (discountPercentage / 100));
                product.setPrice(discountedPrice);
            }
            System.out.println("Discount applied successfully!\n");
        } else {
            System.out.println("Invalid discount percentage. Please enter a value between 0 and 100.\n");
        }
    }

    private static class Product {
        private int productId;
        private String productName;
        private double price;

        public Product(int productId, String productName, double price) {
            this.productId = productId;
            this.productName = productName;
            this.price = price;
        }

        public int getProductId() {
            return productId;
        }

        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public double getPrice() {
            return price;
        }

        public void setPrice(double price) {
            this.price = price;
        }
    }
}
