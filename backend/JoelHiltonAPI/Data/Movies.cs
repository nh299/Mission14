using System.ComponentModel.DataAnnotations;

namespace JoelHiltonAPI.Data
{
    public class Movies
    {
        [Key]
        public int MovieId { get; set; }
        public string? Title { get; set; }
        public int Year { get; set; } 
        public string? Director { get; set;}
        public string? Category { get; set; }
        public string? Rating { get; set; }
    }
}
