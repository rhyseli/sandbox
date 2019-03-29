#include <iostream>

int sum(int a, int b);
int getInput(std::string message);

int main()
{
    int a;
    int b;
    int ans;

    a = getInput("Enter the first number: ");
    b = getInput("Enter the second number: ");

    ans = sum(a, b);
    
    std::cout << "The sum of the numbers is: " << ans;
}

int sum(int a, int b)
{
    return a +b;
}

int getInput(std::string message)
{
    int input;

    std::cout << message;
    std::cin >> input;

    return input;
}
