function printRepeating(arr, size)
{
    let count = new Array(size);
    count.fill(0);
    let i;

    document.write("Repeating elements are ");
    for (i = 0; i < size; i++)
    {
        if (count[arr[i]] == 1)
            document.write(arr[i] + " ");
        else
            count[arr[i]]++;
    }
}
 
let arr = [];
arr.length=101;
let arr_size = arr.length;

printRepeating(arr, arr_size);