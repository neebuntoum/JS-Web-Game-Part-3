
const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100, 250)
move(newImage('assets/tree.png')).withArrowKeys(200, 450)
move(newImage('assets/pillar.png')).withArrowKeys(350, 250)
move(newImage('assets/pine-tree.png')).withArrowKeys(450, 350)
move(newImage('assets/crate.png')).withArrowKeys(150, 350)
move(newImage('assets/well.png')).withArrowKeys(500, 575)


/* const character = newImage('assets/tree.png')
move(character).withArrowKeys(300, 350) */

/* const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250; */

function moveCharacter(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}
setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

setInterval(moveCharacter(), 1) 

document.addEventListener('keydown', function(e){   
    if(e.repeat) return;             
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})
document.addEventListener('keyup', function(e){
    direction = null
})


const inventory = newInventory()
character.style.left = x + 'px'
character.style.bottom = y + 'px'
function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)


function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
    
        setInterval(moveCharacter, 1)
    
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}





