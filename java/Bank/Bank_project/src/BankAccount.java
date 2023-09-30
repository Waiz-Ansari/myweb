import java.util.Scanner;

// BankAccount.java
public abstract class BankAccount {
    protected String accountNumber;
    protected double balance;

    public BankAccount(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
        // BankAccount();
    }

    public abstract void withdraw(double amount);

    public double getBalance() {
        return balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }
}

// SavingsAccount.java
 class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(String accountNumber, double interestRate) {
        super(accountNumber);
        this.interestRate = interestRate;
    }

    @Override
    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }

    public double calculateInterest() {
        return balance * interestRate / 100;
    }
}

// CurrentAccount.java
 class CurrentAccount extends BankAccount {
    private double overdraftLimit;

    public CurrentAccount(String accountNumber, double overdraftLimit) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (balance + overdraftLimit >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }
}

// BankApplication.java (Main class)
 class BankApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Creating a savings account.");
        System.out.print("Enter account number: ");
        String savingsAccountNumber = scanner.nextLine();
        System.out.print("Enter interest rate: ");
        double savingsInterestRate = scanner.nextDouble();
        SavingsAccount savingsAccount = new SavingsAccount(savingsAccountNumber, savingsInterestRate);

        System.out.print("Enter deposit amount: ");
        double savingsDepositAmount = scanner.nextDouble();
        savingsAccount.deposit(savingsDepositAmount);

        System.out.print("Enter withdrawal amount: ");
        double savingsWithdrawAmount = scanner.nextDouble();
        savingsAccount.withdraw(savingsWithdrawAmount);

        System.out.println("Account Number: " + savingsAccount.getAccountNumber());
        System.out.println("Balance: $" + savingsAccount.getBalance());
        System.out.println("Interest: $" + savingsAccount.calculateInterest());

        System.out.println();

        System.out.println("Creating a current account.");
        System.out.print("Enter account number: ");
        String currentAccountNumber = scanner.next();
        System.out.print("Enter overdraft limit: ");
        double currentOverdraftLimit = scanner.nextDouble();
        CurrentAccount currentAccount = new CurrentAccount(currentAccountNumber, currentOverdraftLimit);

        System.out.print("Enter deposit amount: ");
        double currentDepositAmount = scanner.nextDouble();
        currentAccount.deposit(currentDepositAmount);

        System.out.print("Enter withdrawal amount: ");
        double currentWithdrawAmount = scanner.nextDouble();
        currentAccount.withdraw(currentWithdrawAmount);

        System.out.println("Account Number: " + currentAccount.getAccountNumber());
        System.out.println("Balance: $" + currentAccount.getBalance());

        scanner.close();
    }
}

