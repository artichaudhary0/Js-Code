#include <iostream>
using namespace std;

/*
    Inheritance :
        1 : Single (one base class , one derived class)
        2 : Multiple (more then one base class , one derived class)
        3 : Multi-level
        4 : Hierarchical

*/

class C
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

class A : public C
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

class B : public C
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

int main()
{
    // A a ;
    // a.setA();
    // a.setC();
    // a.getA();
    // a.getC();

    // B b ;
    // b.setB();
    // b.setC();
    // b.getB();
    // b.getC();

    A a;
    B b;

    a.setA();
    b.setB();
    a.setC();
    a.getA();
    b.getB();
    a.getC();

    // B b;
    // b.setA();
    // b.setB();
    // b.getA();
    // b.getB();

    return 0;
}