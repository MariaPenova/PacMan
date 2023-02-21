# 21 Feberuary 

  * DONE
    * Created for loop for placing all the dots in the labyrinth 
    * Placed all the mini dots and four of the big dots in the labyrinth (using specific px of where they should appear) as they appear in the following link - https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1

# 20 Feberuary 

  * DONE
    * Started putting the dots in the labyrinth - investigated the ways of how I can do it 
      * Cropped the dot with the css and then cloned it by using the function cloneNode() and changing its coordinates 
      * I cloned a several dots but to put all of them on the labyrinth I will have to use a for loop not just adding them manually - so I will do this tomorrow 

# 17 Feberuary 

  * DONE
    * After further investigation I had something new on my mind
      * I thought that for the Pacman to differ walls and paths I can give it the opportunity of on which coordinates it can move and which coordinates are forbidden - but I do not know how to make this 
      
# 16 Feberuary 

  * DONE
    * Continued investigating how can I make the Pacman differ walls and paths - theoretically I have an idea but practically can not and do not know how to realize this idea

# 15 Feberuary 

  * DONE
    * Searched for alternative approaches for how to move the character through out the labyrinth 
      * Found that I can use Canvas but it is specifically said in the document linked below that I should not use it - so I need some help with this function. https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1

# 14 Feberuary 

  * DONE
    * Read about arrays 
      * Functions which can be used in any type of JavaScript array
      * 2D arrays - array of arrays
    * Theoretically know how I want and can move the PacMan in the labyrinth - practically have no idea how to do it - so I will investigate further options.


# 13 Feberuary 

  * DONE
    * Investigated how can I make the PacMan move only in the labyrinth 
    * Want for the character to know where are walls and paths so he can move correctly - when there is a wall on his right to know that he can move only up, right and down
    * My opinion is that these things can happen with arrays 
      * I want somehow to create an invisible array with exact sizes of the PacMan labirynth 
      * Then to say which parts of this array are walls of the labyrinth so the character can not pass through them

# 3 Feberuary 

  * DONE
    * Applied animations to the PacMan
      * Now the character is animated with a specific (skin/movements) based on the diraction he is moving
    * The function 'clip' did not help me so I've exchanged it for 'object-position'
    * Every change is pushed to GitHub

# 2 Feberuary 

  * DONE
    * Created game loop (setInterval) which is executing itself every 100ms
      * I've managed to put animations by using some "if" conditions for changing the clipped portions of the character
       * Also I'm thinking that we should not use the "clip" function for displaying a specific portion of our png becouse the function is croping specific part and is showing only the part noting else and when I apply animations on the portions which are clipped the charchter is looking as if it is going on some direction without pressing any key
  * DO's
    * Fix the animations

# 1 Feberuary 

  * DONE
    * Read about game loop https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1
       * Read more about game loop online     
    * Managed to select and crop different portions of the PacMan character using JavaScript
    * Couldn't crate game loop 
      * Find out how to change the view of the charachter when one of the arrow key is pressed 
        * Also find how to add a seconds for doing this 
        * But still can not figure it out how can I make the movement smooth because it is currently jumping from position 1 to position 3 without showing position 2
  * DO's
    * Insert animation to the pacMan
  

# 31 January

  * DONE 
    * Moved the script in separate JavaScript file
      * An error occurred where the word "event" which I'm using in my code is scratched
      * Investigated it and found out that it is happaning beacuse I've named my variable after an 'event' so I changed it 
    * Linked the js, html and css files to one another
    * Fixed my code for moving the PacMan based on pressed arrow key
    * Also made the PacMan able to move through the whole sprites heet
  * DO's
      * Read about game loop https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1
      * Insert animation to the pacMan



# 30 January

   * DONE
    * Investigated moving png with css and html 
    * Tried several approaches to make the pacMan move with no JavaScript but only css and html
      * There I have a several errors which I'm going to investigate further more tomorrow
    * Still stuck in if I am able to use the clipped part as a separate png so I can give to it width and height and make the animation looks like the character is moving on specific directions? (I want to use the clipped part as a separate image and choose which portions of the image to be shown and which to be with the property overflow: hidden;)
    * DO's
      * JavaScript in separate file
      * Read about game loop https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1


# 27 January

   * DONE
     * Clipped the exact portion of the sprite sheet which I needed using clip: rect() with a few adjustments
        * Added animation to it
        * Tried a lot of way to make the PacMan animation look like as if the character is moving based on the give direction 
          * I'll be needing help with this - Am I able to use the clipped part as a separate png so I can give to it width and height and make the animation looks like the character is moving on specific directions? (I want to use the clipped part as a separate image and choose which portions of the image to be shown and which to be with the property overflow: hidden;)
      * Investigated approaches of how to make the PacMan moving based on the pressed keyboard key
        * For this I will be using JavaScript
      * Pushed all of my progress to GitHub
    * DOs
      * Make the PacMan move 

# 26 January

  * DONE
    * Tried to crop a specific portion of the sprite sheet (in particular the PacMan character) with the following functions and neither of them did the exact thing I'm needing:
      * Clip() 
      * Clip-path()
        * Clip-path: inset()
        * Clip-path: polygon
      * Object-fit()
      * Object-position()
      * Transform: scale()
  * DOs
    * Make the PacMan move 
    * See how to read the keyboard (use the arrows)
    * See how to move the PacMan based on the pressed key

# 25 January

* DONE
  * Swiched to the sprite sheet with trancparancy 
    * Figured out that is better to use the sprite sheet wich does not contain the PacMan Labirynth with the dots because we would have to eventually remove the dots in the course of development of the game
  * Cleaned up the unnecessary files  
* DOs
  * Make the PacMan move 
    * See how to read the keyboard (use the arrows)
    * See how to move the PacMan based on the pressed key

# 24 January

* DONE
  * Connected the project to GitHub
  * Cleaned up the unnecessary code and files
* DOs
  * Find complete sprite sheet with transparancy (if not assamble one from the two you have and contribute it to the open scourse)
  * Swich to the sprite sheet
  * Make the PacMan move 
    * See how to read the keyboard (use the arrows)
    * See how to move the PacMan based on the pressed key