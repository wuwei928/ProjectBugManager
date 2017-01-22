using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBugManager.Common
{
    public static class CacheManager
    {

        private static readonly MemoryCache cache;
        private const double defaultExpirationInDay = 30;

        static CacheManager()
        {
            cache = new MemoryCache("Butler");
        }

        public static void Add(string key, object value)
        {
            var policy = new CacheItemPolicy
            {
                AbsoluteExpiration = DateTime.Now.AddDays(defaultExpirationInDay)
            };
            cache.Add(key, value, policy);
        }

        public static void Add(string key, object value, TimeSpan timeout)
        {
            cache.Add(key, value, new CacheItemPolicy
            {
                SlidingExpiration = timeout
            });
        }

        public static bool Contains(string key)
        {
            return cache.Contains(key);
        }
        public static void Set(string key, object value)
        {
            var policy = new CacheItemPolicy
            {
                AbsoluteExpiration = DateTime.Now.AddDays(defaultExpirationInDay)
            };
            cache.Set(key, value, policy);
        }

        public static void Set(string key, object value, TimeSpan timeout)
        {
            var policy = new CacheItemPolicy
            {
                SlidingExpiration = timeout
            };
            cache.Set(key, value, policy);
        }


        public static T Get<T>(string key)
        {
            if (cache[key] != null) return (T)cache[key];
            return default(T);
        }

        public static void Remove(string key)
        {
            cache.Remove(key);
        }
    }
}
