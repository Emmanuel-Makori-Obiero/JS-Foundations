//This is like a timer in js..
//To explain it well ill go a little deeper
/*There are two ways of synch(waiting) in js..There is:
i.synchronous-This is whereby a computer freezes until a process is complete
ii.Asynchronous(async)-This is whereby a computer can undergo other processes while a process is running..its like multitasking
*/
//A real life example is like lets say we want to make toast
function useToaster() {
  return new Promise((Resolve) => {
    console.log("1. [Toaster] Bread goes in");

    setTimeout(() => {
      Resolve("3. [Toaster] Ding! Toast is ready");
    }, 3000);
  });
}
async function makeBreakfast() {
  const toasterPromise = useToaster();
  console.log("2. [Me] Getting butter from the fridge..");
  const toast = await toasterPromise;
  console.log(toast);
  console.log("4. [Me] Spreading the butter. Breakfast is served!");
}

makeBreakfast();
