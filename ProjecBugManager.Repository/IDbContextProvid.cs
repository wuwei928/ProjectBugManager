using System.Data.Entity;


namespace ProjecBugManager.Repository
{
    public interface IDbContextProvid
    {
        DbContext GetDbContext();
    }
}
