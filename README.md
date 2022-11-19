# GenDev Holiday Challenge Niklas Minth


## Projekt
The project is divided into 2 folders. The **client folder** contains the frontend, the **server folder** contains the backend.
The frontend was implemented with the Javascript framework **React JS**, the backend was implemented with **Node Js**.

### Front-End
The project is realized through a website, which is available as a desktop version. This version is not yet responsive, meaning that on smaller devices such as smartphones or tablets, the website content may not be displayed properly.

#### Homepage
The website has a home page (**Home.js**) where you can see the search box with the user input. The user can choose to search only for hotels, or for hotels&flights. So he can change the search window by clicking on the buttons above.
![Homepage-Flug&Hotel-SearchWindow](./README-IMAGES/Home-FH.png)
![Homepage-Hotel-SearchWindow](./README-IMAGES/Home-H.png)


#### ResultPage
The destinations and departure airports can be selected via a dropdown, the date via a calendar view and the number of adults, children and rooms via a text field that only accepts numbers. When the user clicks on the blue button and all the fields are filled in, the search is started and the user is redirected to the next page (**ResultPage.js**), where the search window is still displayed on the left side, where entries can still be changed, and the results are displayed on the right side.
![Resultpage](./README-IMAGES/Results-FH.png)
![Resultpage](./README-IMAGES/Results-H.png)

#### Individual Hotel Offers
By clicking on the "Zu den Angeboten" button, the offers specific to the selected hotel will appear.
![Resultpage-Individual Offers](./README-IMAGES/Offers.png)
#### Inputs:
<div display='flex'>
<img src='./README-IMAGES/Input-Destination.png' width='30%'>
<img src='./README-IMAGES/Input-Departure.png' width='30%'>
<img src='./README-IMAGES/Input-Date.png' width='30%'>
</div>


#### Saved Inputs:
No matter in which search field the data is entered, the data is stored in all fields.
<div display='flex'>
<img src='./README-IMAGES/Input-Saved.png' width='30%'>
<img src='./README-IMAGES/Input-Saved-H.png' width='30%'>
<img src='./README-IMAGES/Input-Saved-R.png' width='30%'>
</div>


#### Login
In the navigation bar, clicking on the Check24 logo will take the user to the homepage, and clicking on the profile icon will cause a Login/CreateAccount window to pop up, where the user can create an account or log in.
<div display='flex'>
<img src='./README-IMAGES/CreateAccount.png' width='250px'>
<img src='./README-IMAGES/LogIn.png' width='250px'>
</div>


#### Loading Circle
As soon as the search for offers is started and the data is loaded, a rotating loading-circle appears. As soon as all results are loaded or you switch to the results page, the loading circle disappears.

<img src='./README-IMAGES/Loader.png'>

### Back-End


