const data = loadData()
//console.log(loadData())
const $moviesList = document.getElementById("moviesList")

renderMovies()

function renderMovies(){
    data.movies.forEach(movie => {
        const $movie = document.createElement("div")
        $movie.innerHTML = `<h1>${movie.name}</h1>`
        movie.reviews.forEach(review => {
            $movie.innerHTML += `<li>${review.rating}</li>`
        })
        $moviesList.append($movie)
    })
}

function loadData() {
    const movies = [
        {
            //key : value
            "name" : "Star Wars: Episode IV",
            "genre" : "Sci-Fi",
            "reviews" : [
            
                {
                    "rating" : 5,
                    "like" : true,
                    "user" : {
                        "name" : "Jacob Bitter",
                        "gender" : "Male",
                        "region" : "USA"
                    }
                },

                {
                    "rating" : 2,
                    "like" : false,
                    "user" : {
                        "name" : "Jane Doe",
                        "gender" : "Female",
                        "region" : "Canada"
                    }
                }
            ]
        },

        {
            //key : value
            "name" : "The Notebook",
            "genre" : "Romantic Comedy",
            "reviews" : [
                {
                    "rating" : 4,
                    "like" : true,
                    "user" : {
                        "name" : "Placeholder Review",
                        "gender" : "Other",
                        "region" : "Mariana Trench"
                    }
                }
            ]
        }
    ]

    return {
        "movies" : movies
    }
}