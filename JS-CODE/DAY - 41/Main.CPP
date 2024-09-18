#include <iostream>
using namespace std ;
/*
    Types of Inheritance(share)
    1 : Single inheritance (1 base class , 1 derived class)
    2 : Multiple inheritance (more then 1 base class , 1 derived class)
*/

// parent , base , super class
class ARTIJS10{
    protected : 
        int grid ;
        string subCourse ;
    
    
    public :
        void setter()
        {
            cout<<"ARTIJS10"<<endl;
            cout<<"Enter the grid : ";
            cin>>grid;
            cout<<"Enter subcourse : ";
            cin>>subCourse ;
        }
};

class ARTIJS11{
    protected : 
        int grid ;
        string subCourse ;
    
    
    public :
        void setter()
        {
            cout<<"ARTIJS11"<<endl;
            cout<<"Enter the grid : ";
            cin>>grid;
            cout<<"Enter subcourse : ";
            cin>>subCourse ;
        }
};
// child , derived , sub class , visibility mode
class ARTIJS12 : public ARTIJS10 , public ARTIJS11{
    
    public :
    // setter()
    void getter()
    {
        cout<<"Grid : "<<grid<<" "<<"Sub course : "<<subCourse;
    }

};


int main() {
    
    ARTIJS12 obj ;
    obj.setter();
    
    

    return 0;
}