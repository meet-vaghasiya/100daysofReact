1.  i am not getting autocomplete extension in react in js file. so i found that, there is option also in which we can set only for currnt project.
    i.e. i add react mode on in js, so i get react auto suggestion in vs code. and also on autoformat.
2.  {} we can only use primitive data type in that. not object. i tried with date object.

3. we can not change nested object in react using setError useState in hooks.
4. css module is not working in card but woarking in AddUser form . may be because we use Card as parent in Adduser is childern of Card.js
5. 
 in below second code has {} braces instead of () braces which means map doest return anything. so li is not rendered. make sure every li return something. so always use () braces.

    ```
            {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age})
            </li>
            ))}
    ```
    ```
            {props.users.map((user) => {
            <li key={user.id}>
                {user.name} ({user.age})
            </li>
            })}
    ```

6. if you are not getting headers, it's probably you not exported that component.
7.  css style is not rendering than may be you not imported .module.css file. or and also check classes['your-class-name']  correclty.