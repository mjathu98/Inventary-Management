using System.ComponentModel.DataAnnotations;

public class ProductPrice
{
    public int Id { get; set; }
    [Required]
    public int ProductStockId { get; set; }
    public decimal Price { get; set; }
    public DateTime PriceEffectiveDate { get; set; } = DateTime.UtcNow;

    public ProductStock ProductStock { get; set; }
}
