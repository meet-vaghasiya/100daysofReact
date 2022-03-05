# 1st day

1.  q. what is react and why we use react ? => reusable component code and code sepration main goal
2.  differe between vue and react ?

        1. vue use class , react use className
        2. vue use template, script and style blog, where react use separe js and css file
        3.  compoent is in .vue file and in react it's jsx (where we can write javascript and html code ) file
        4. createStore instance taken from librrary. and use app.mount() for mouting whereas in react ReactDom.render() function is use
        5. defualt id in vue is app , where as in react is root.
        6. in vue we just add id name in mount function , where as in react we take node using document.getElementById('#root)
        7. vue3 give good project structure like pages and components directory but in vue js we have to make that.
        8. compoent in vue is file which contain template, script, style where as in react it is function which return html code.
        9. in react we have to use ExpenseItem component. where as vue js gives flexibility to use <expense-item></expense-item> or <ExpenseItem />
        10. in vue js , to render data in template, we use  double curly breaces , but in react we use single curly braces.
        11. in vue js there is main.js file, in react index.js file

3.  to see converted App.js code -> go to inspect element ->source -> static folder and search App() function in that.
    this, how react transfer code jsx to js in background for whole app.


# 2nd day

1. understanding type of data is very important. for example for example if you want to show date on front end .if you directly show date as {date} than it's not work.  user don't know that, in which format date should pass as object. that's why typescript should use here.
2. learning props and compositions.
3. createElement and use of 'react library
4. convert function() to arrow function.
5. state is use only in function() neither outer side nor in return function . we also not use in some nested function . use only in  direct first scope. useState always takes two return value. when i learning first time react, than i understand that , its should be  start from first line. but that's not true. it should be in first scope.
6. define state for form.

        ```

        const [enterTitle, setEnterTitle] = useState("");
        const [amout, setAmout] = useState("");
        const [date, setDate] = useState("");

        ```

 **replace above stated to one object**

        ```
        const [formData, setFormData] = useState({
        enterTitle: "",
        amount: "",
        date: "",
        });

        ```
7. if you want to update other forms object than

        ```
        const titleChangeHandler = (e) => {
                setFormData({
                ...formData,
                enterTitle: e.target.value,
                });
        };

        ```

in above react dont give latest updated ...formData so use titleChangeHandler as function . which give  prevState as snapshop which give latest updated formData. in genral both are works proper but may be in some case it's not work well.

        ```
        setFormData as function
                const titleChangeHandler = (e) => {
                        setFormData((prevState) => {
                        return { ...prevState, enterTitle: e.target.value };
                        });
                };
        ```

8. passing data in props as fuction . this is same as emiiting event in vue js.
9. what to render component in loop . using map and use conditional basded component.