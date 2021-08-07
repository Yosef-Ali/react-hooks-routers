## React router dom

### Link

Every anchor `a` should be change to `Link` and `href` to `to` to prevent un unnecessary network recall

```
 <Link to="/">Home</Link>
```

### Hooks

1. `useParams` get's parmeter from url
2. `useHistory` redirection the page

```
 history.go(-1);
 history.push('/');
```

### Abort the fetch

add Abort module for cleaning at useFetch custom hook

````
const abortCont = new AbortController();
    return () => abortCont.abort();
	```
````
