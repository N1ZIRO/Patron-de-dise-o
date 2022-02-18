using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesingPattern.Prototype
{
    internal class Cars : ICloneable
    {
    
        public int doors { get; set;}
        public String? motor { get; set;}

        public object Clone()
        {
            return (Cars)this.MemberwiseClone();
        }
    }
}