import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Constants, WebBrowser } from 'expo';
import welcome from './assets/welcome.gif';
import a from './assets/A.gif';
import b from './assets/B.gif';
import c from './assets/C.gif';
import d from './assets/D.gif';
import e from './assets/E.gif';
import f from './assets/F.gif';
import g from './assets/G.gif';
import h from './assets/H.gif';
import fruits from './assets/fruits.gif';
import flowers from './assets/flowers.gif';
import animals from './assets/animals.gif';
import colors from './assets/color.gif';
import numbers from './assets/numbers.gif';
import shapes from './assets/shapes.gif';
import solar from './assets/solar.gif';
import mercury from './assets/mercury.gif';
import venus from './assets/venus.gif';
import earth from './assets/Earth.gif';
import mars from './assets/mars.gif';
import jupiter from './assets/jupiter.gif';
import saturn from './assets/saturn.gif';
import uranus from './assets/uranus.gif';
import neptune from './assets/neptune.gif';




SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 6000);


//Welcome Screen


function WelcomeScreen({ navigation }) {  
  return (
    <View>

    		<ImageBackground
    			source={welcome}
    			style={{height: 850, width: 375}}
    		>

    			<View style={styles.appName}>
    				<Text style={{fontSize: 80, fontWeight: "200"}}>
    					Kinder
    				</Text>
    				<Text>{"    "}</Text>
    				<Text style={{fontSize: 80, fontWeight: "bold"}}>
    					AR
    				</Text>
    			</View>

    			<View style={styles.loginBar}>

		    		<TouchableHighlight 
					   	style={styles.button}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{color: "white"}}>Login</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.button}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{color: "white"}}>Sign Up</Text>
					</TouchableHighlight> 

    			</View>

    		</ImageBackground>

    </View>
  );
}


///Categories Screen

function CategoriesScreen({ navigation }) {  
  return (
    <View style={styles.categories}>

    <View style={styles.container1}>
      <TouchableOpacity 
    		onPress={() => navigation.navigate('Alphabet')}
       >
			<Image source={a} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Alphabet</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Planets')}
       >
			<Image source={venus} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Planets</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Animals')}
       >
			<Image source={animals} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Animals</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Flowers')}
       >
			<Image source={flowers} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

       <Text style={styles.text}>Flowers</Text>

    </View>

    <View style={styles.container2}>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Fruits')}
       >
			<Image source={fruits} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Fruits</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Shapes')}
       >
			<Image source={shapes} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Shapes</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Numbers')}
       >
			<Image source={numbers} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Numbers</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Colors')}
       >
			<Image source={colors} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Colors</Text>

    </View>

    </View>
  );
}


//Aplhabet Screen


function AlphabetScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
    	<ScrollView>
    	<View style={styles.horizontalContainer}>
    		<ScrollView horizontal={true}>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={a} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.B}
		       >
					<Image source={b} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={c} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={d} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={e} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		    </ScrollView>
		</View>

		<View style={styles.browse}>
			<Text style={{ fontSize:20, color: '#861be3'}}> Browse More Below </Text>
		</View>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={a} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={c} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={e} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={g} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

	 		    <View style={styles.container2}>

					<TouchableOpacity 
			    		onPress={this.B}
			        >
						<Image source={b} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={d} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={f} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={h} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>
		</ScrollView>
    </View>
  );
}

  A = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/alpha.html');
  }

  B = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/beta.html');
  }

///Planets Screen


function PlanetsScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
    	<ScrollView>
    	<View style={styles.horizontalContainer}>
    		<ScrollView horizontal={true}>

		      <TouchableOpacity 
		    		onPress={this.Solar}
		       >
					<Image source={solar} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Solar System</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={mercury} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Mercury</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={venus} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Venus</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.Earth}
		       >
					<Image source={earth} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Earth</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={mars} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Mars</Text>
					</View>
		      </TouchableOpacity>

		    </ScrollView>
		</View>

		<View style={styles.browse}>
			<Text style={{ fontSize:20, color: '#861be3'}}> Browse More Below </Text>
		</View>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={mercury} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Mercury</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={earth} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Earth</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={jupiter} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Jupiter</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={uranus} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Uranus</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={venus} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Venus</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={mars} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Mars</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={saturn} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Saturn</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={neptune} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Neptune</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>
		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }


///Navigation


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      		initialRouteName="Welcome"
			screenOptions={{
			        headerStyle: {
			          backgroundColor: '#861be3',
			        },
			        headerTintColor: '#ffffff',
			        headerTitleStyle: {
			        fontSize: 25,
			        fontWeight: "300"
			        },}}
      >
        <Stack.Screen 
        	name="Welcome" 
        	component={WelcomeScreen}
        	options={{ 
        		title: 'Welcome',
        		headerShown: false
        	}}
        />
        <Stack.Screen 
        	name="Categories" 
        	component={CategoriesScreen}
        	options={{
        		title: 'Home',
        		headerLeft: null
        	}}
        />
        <Stack.Screen
        	name="Alphabet"
        	component={AlphabetScreen}
        	options={{ title: 'Alphabet'}}
        />
        <Stack.Screen
        	name="Planets"
        	component={PlanetsScreen}
        	options={{ title: 'Planets'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//StyleSheet


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categories: {
    	flex: 1,
    	flexDirection: 'row',
    },
    container1: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    container2: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    horizontalContainer: {
    	height: 540,
    	alignItems: 'center',
    },
    verticleContainer: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    smallButtons: {
    	height: 134,
    	width: 126,
    	marginTop:15,
    	marginBottom:5,
	    paddingTop:10,
	    paddingBottom:10,
	    marginLeft:30,
	    marginRight:30,
	    borderRadius:6,
	    borderWidth: 0.5,
	    borderColor: 'black'
    },
    smallButtons2: {
    	height: 250,
    	width: 156,
    	marginTop:15,
    	marginBottom:5,
	    paddingTop:10,
	    paddingBottom:10,
	    marginLeft:15,
	    marginRight:15,
	    borderRadius:5,
	    borderWidth: 0.5,
	    borderColor: 'black'
    },
    bigButtons: {
    	height: 481,
    	width: 343,
    	marginTop:25,
	    paddingTop:15,
	    paddingBottom:15,
	    marginLeft:15,
	    marginRight:15,
	    borderRadius:30,
	    borderWidth: 0.5,
	    borderColor: 'black'

    },
    roundButton: {
    	height: 50,
    	width: 50,
    	borderRadius: 100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 0.5,
	    borderColor: 'black',
	    marginTop: 20,
	    marginLeft: 20,
    },
    browse: {
    	alignItems: 'center',
    },
    names1: {
    	alignItems: 'center',
    	justifyContent: 'center',
    	marginTop:5,
    	marginBottom:5,
    },
    names2: {
    	alignItems: 'center',
    	justifyContent: 'center',
    	marginBottom:6,
    },
    text: {
    	color: '#861be3',
    },
	button: {
	   alignItems: "center",
	   backgroundColor: "black",
	   marginTop: 100,
	   marginLeft: 20,
	   marginRight: 20,
	   padding: 10,
	   borderRadius:4,
	   borderWidth: 0.5,
	   borderColor: 'black',
	   width: 130,
	},
	appName: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 230,
	},
	loginBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});



