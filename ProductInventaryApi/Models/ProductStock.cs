using System.ComponentModel.DataAnnotations;

public class ProductStock
{
    public int Id { get; set; }
    [Required]
    public int ProductId { get; set; }
    public int UpdatedStock { get; set; }
    public DateTime StockUpdateDate { get; set; } = DateTime.UtcNow;

    public Product Product { get; set; }
}
