import java.util.ArrayList;
import java.util.List;

// Book class represents a book in the library
class Book {
    private String title;
    private String author;
    private int year;

    public Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public int getYear() {
        return year;
    }
}

// Library class represents the library and its operations
class Library {
    private List<Book> books;

    public Library() {
        books = new ArrayList<>(); //<Book>
    }

    public void addBook(Book book) {
        books.add(book);
        System.out.println("Book added: " + book.getTitle());
    }

    public void removeBook(Book book) {
        if (books.remove(book)) {
            System.out.println("Book removed: " + book.getTitle());
        } else {
            System.out.println("Book not found: " + book.getTitle());
        }
    }

    public void displayBooks() {
        System.out.println("Library Books:");
        for (Book book : books) {
            System.out.println(book.getTitle() + " by " + book.getAuthor() + " (" + book.getYear() + ")");
        }
    }
}

// Main class to demonstrate the library management system
public class App {
    public static void main(String[] args) {
        Library library = new Library();

        // Adding books to the library
        Book book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
        library.addBook(book1);

        Book book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
        library.addBook(book2);

        Book book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        library.addBook(book3);

        // Displaying all books in the library
        library.displayBooks();

        // Removing a book from the library
        library.removeBook(book2);

        // Displaying the updated list of books
        library.displayBooks();
    }
}
