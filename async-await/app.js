const cleanFloor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Floor cleaning done')
        }, 1000)
    })
  }
  
const getReward = (res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res +', '+ 'Got 10$ Reward')
      }, 5000)
    })
  }
  
//cleanFloor().then(res => console.log(res))
// cleanFloor().then(res => getReward(res)).then(res1 => console.log(res1))

async function getData () {
    r1 = await cleanFloor();
    r2 = await getReward(r1);
    console.log(r2)
}