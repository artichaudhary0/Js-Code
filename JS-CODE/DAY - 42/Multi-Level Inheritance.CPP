#include <iostream>
using namespace std;

/*
    Inheritance :
        1 : Single (one base class , one derived class)
        2 : Multiple (more then one base class , one derived class)
        3 : Multi-level

*/

class A
{
protected:
    int a;

public:
    void setA()
    {
        cout << "Enter the value of A : ";
        cin >> a;
    }

    void getA()
    {
        cout << "Value of a is : " << a << endl;
    }
};

class B : public A
{
protected:
    int b;

public:
    void setB()
    {
        cout << "Enter the value of B : ";
        cin >> b;
    }

    void getB()
    {
        cout << "Value of B is : " << b << endl;
    }
};

class C : public B
{
protected:
    int c;

public:
    void setC()
    {
        cout << "Enter the value of C : ";
        cin >> c;
    }

    void getC()
    {
        cout << "Value of c is : " << c << endl;
    }
};

int main()
{
    C c;
    c.setA();
    c.setB();
    c.setC();

    c.getA();
    c.getB();
    c.getC();
    // B b;
    // b.setA();
    // b.setB();
    // b.getA();
    // b.getB();

    return 0;
}