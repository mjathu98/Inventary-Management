using System.ComponentModel.DataAnnotations;

public class Product
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; }

    [MaxLength(250)]
    public string Description { get; set; }

    [Required]
    public int CategoryId { get; set; }

    [MaxLength(255)]
    public string ThumbnailImage { get; set; }
}
