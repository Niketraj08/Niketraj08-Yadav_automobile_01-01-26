// Question 3 :
// Write a program to input a number and check whether the number is an Armstrong number or not. user input 
#include <iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter a number ";
    cin>>n;
    int num = n;
    int cubeSum = 0;
    while (num > 0)
    {
        int lastDig = num % 10;
        cubeSum += lastDig * lastDig * lastDig;
        num /= 10;
    }
    if (n == cubeSum)
    {
        cout << "Armstrong number \n";
    }
    else
    {
        cout << "Not an Aramstrong number \n";
    }

    return 0;
}