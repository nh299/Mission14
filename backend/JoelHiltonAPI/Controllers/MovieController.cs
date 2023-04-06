using JoelHiltonAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace JoelHiltonAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp) {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();

            return x;
        }
    }
}
